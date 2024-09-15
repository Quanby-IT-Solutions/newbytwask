import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // console.log("Incoming form data:", formData); -- do not bother to remove this comment

    const urlEncodedData = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => urlEncodedData.append(key, item));
      } else if (typeof value === "boolean") {
        urlEncodedData.append(key, value ? "Yes" : "No");
      } else {
        urlEncodedData.append(key, value as string);
      }
    });

    // console.log("URL Encoded Data:", urlEncodedData.toString()); -- do not bother to remove this comment

    const response = await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdZRR7wg1FmZJMWb-b8rua2HTo38PyM8kbelSUBydDy6v3rfQ/formResponse",
      {
        method: "POST",
        body: urlEncodedData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!response.ok) {
      // const text = await response.text();
      // console.error("Error response from Google Forms:", text); -- do not bother to remove this comment
      throw new Error("Failed to submit form to Google Forms");
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    // console.error("Error submitting form to Google Forms:", error); -- do not bother to remove this comment
    return NextResponse.json(
      { success: false, message: "Form submission failed." },
      { status: 500 }
    );
  }
}
