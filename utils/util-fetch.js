export const fetchMessages = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    console.log(`Fetching messages from: ${apiUrl}/api/message`);
    const res = await fetch(`${apiUrl}/api/message`);

    if (!res.ok) {
      throw new Error(`Failed to fetch messages, status: ${res.status}`);
    }
    const data = await res.json(); // Corrected from response to res

    // Ensure that `data.messages` exists and is an array
    if (!Array.isArray(data?.messages)) {
      throw new Error(
        "The fetched data does not contain a valid 'messages' array."
      );
    }
    // return { messages: data.messages || [] };
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    // Return fallback data to allow the build to succeed
    return [error];
    // return { messages: [], error: error.message };
  }
};

export const fetchMessage = async (id) => {
  const data = await fetchMessages();
  return data.find((message) => message._id === id);
};
