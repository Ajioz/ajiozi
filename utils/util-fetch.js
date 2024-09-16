
export const fetchMessages = async () => {
  try {
    const apiUrl = process.env.NEXTAUTH_URL; // Use environment variable for base URL

    if (!/^https?:\/\//.test(apiUrl)) {
      throw new Error(`Invalid API URL: ${apiUrl}`);
    }

    const res = await fetch(`${apiUrl}/api/message`);

    if (!res.ok) {
      const responseText = await res.text(); // Get response text for more details
      throw new Error(
        `Failed to fetch messages, status: ${res.status}, ${responseText}`
      );
    }

    const data = await res.json();
    console.log(`Messages fetched: ${data}`);

    if (Array.isArray(data)) {
      return data;
    }
    throw new Error("Fetched data is not an array");
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    // Return an empty array to ensure serializable data
    return [];
  }
};

export const fetchMessage = async (id) => {
  const data = await fetchMessages();
  return data.find((message) => message._id === id);
};
