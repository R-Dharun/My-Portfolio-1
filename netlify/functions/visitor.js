const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase Client
const supabase = createClient(
  'URL1', // Replace with your Supabase URL
  'API_KEY' // Replace with your Supabase API key
);

exports.handler = async (event, context) => {
  try {
    // Log the start of the function
    console.log("🔁 Inserting a new visit...");

    // Insert a new visit into Supabase table (omit `count`)
    const { error: insertError } = await supabase
      .from('visits')
      .insert([{ timestamp: new Date().toISOString() }]);  // Insert only timestamp

    // Check for insertion errors
    if (insertError) {
      console.error("❌ Error inserting visit:", insertError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to insert visit", details: insertError.message }),
      };
    }

    // Log the process of fetching the count
    console.log("📊 Fetching visitor count...");

    // Get the visit count from Supabase
    const { data, count, error: countError } = await supabase
      .from('visits')
      .select('*', { count: 'exact', head: true });

    // Check for count errors
    if (countError) {
      console.error("❌ Error fetching count:", countError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch visit count", details: countError.message }),
      };
    }

    // Check if count is null or undefined
    if (count == null) {
      console.error("❌ Visitor count is null or undefined");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Visitor count is missing or invalid" }),
      };
    }

    // Log the visitor count
    console.log("✅ Visitor count:", count);

    // Return success with the count
    return {
      statusCode: 200,
      body: JSON.stringify({ count }),
    };
  } catch (err) {
    // Catch any unexpected errors
    console.error("🔥 Unexpected error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An unexpected error occurred", details: err.message }),
    };
  }
};
