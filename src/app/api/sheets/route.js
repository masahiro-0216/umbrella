// サービスアカウント認証情報を環境変数から取得
import { google } from "googleapis";

const spreadsheetId = process.env.SPREADSHEET_ID;
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

export async function POST(request) {
  try {
    const { range, values } = await request.json();

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return new Response(
      JSON.stringify({ updated: response.data.updatedCells }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function updateSheet(umbrellaID, email, place, isRent) {
  const now = new Date();
  const res = await fetch("/api/sheets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      range: `データ表!B${Number(umbrellaID) + 1}:E${Number(umbrellaID) + 1}`,
      values: [[isRent, email, now.toString(), place]],
    }),
  });

  const data = await res.json();

  if ("error" in data) {
    // エラーの場合
    return { success: false, error: data.error };
  }

  // 成功の場合
  return { success: true, data };
}
