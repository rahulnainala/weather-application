export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location") || "Bengaluru";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    return res.json();
  } catch (error) {
    return Response.json({ error: "Failed to fetch weather" }, { status: 500 });
  }
}
