/**
 * Data Fetch Utility Helper
 */
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load data from ${url}: HTTP status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`[Data Fetch Error] ${error.message}`);
    return null;
  }
}
