import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("attendeeEmail");

    if (!email) {
      return NextResponse.json(
        {
          status: "error",
          data: [],
          error: { message: "attendeeEmail is required" },
        },
        { status: 400 }
      );
    }

    // Cal.com API key from environment variables
    const apiKey = process.env.CALCOM_API_KEY;
    const apiVersion = "2024-08-13"; // As specified in the documentation

    if (!apiKey) {
      return NextResponse.json(
        {
          status: "error",
          data: [],
          error: { message: "Cal.com API key is not configured" },
        },
        { status: 500 }
      );
    }

    // Fetch appointments from Cal.com API
    const appointments = await fetchCalComAppointments(
      email,
      apiKey,
      apiVersion,
      searchParams
    );

    return NextResponse.json({
      status: "success",
      data: appointments,
      error: {},
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      {
        status: "error",
        data: [],
        error: { message: "Failed to fetch appointments" },
      },
      { status: 500 }
    );
  }
}

async function fetchCalComAppointments(
  email: string,
  apiKey: string,
  apiVersion: string,
  searchParams: URLSearchParams
) {
  // Cal.com API endpoint
  console.log({ email, apiKey, apiVersion, searchParams });
  const apiUrl = new URL("https://api.cal.com/v2/bookings");

  // Add query parameters
  apiUrl.searchParams.append("attendeeEmail", email);
  // &status=upcoming,past,cancelled
  apiUrl.searchParams.append("status", "upcoming,past,cancelled");

  // Add other query parameters if provided
  [
    "status",
    "attendeeName",
    "eventTypeIds",
    "eventTypeId",
    "teamsIds",
    "teamId",
    "afterStart",
    "beforeEnd",
    "afterUpdatedAt",
    "beforeUpdatedAt",
    "sortStart",
    "sortEnd",
    "sortCreated",
    "sortUpdatedAt",
    "take",
    "skip",
  ].forEach((param) => {
    const value = searchParams.get(param);
    if (value) apiUrl.searchParams.append(param, value);
  });

  console.log({ apiUrl });

  // Fetch bookings
  const response = await fetch(apiUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "cal-api-version": apiVersion,
    },
  });

  if (!response.ok) {
    throw new Error(`Cal.com API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log({ data });

  if (data.status !== "success") {
    throw new Error(
      `Cal.com API returned an error: ${JSON.stringify(data.error)}`
    );
  }

  return data.data;
}

export const dynamic = "force-dynamic";
