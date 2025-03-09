export async function fetchTrendingSongs() {
  try {
    const response = await fetch('/api/trending-songs', {
      headers: {
        'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('Unauthorized: Check your Clerk keys');
      } else {
        console.error('Error:', response.statusText);
      }
      return;
    }

    const data = await response.json();
    console.log('API Response:', data);

    // Ensure data is defined before accessing its properties
    if (data) {
      // ...existing code to handle data...
    } else {
      console.error('Data is undefined');
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}