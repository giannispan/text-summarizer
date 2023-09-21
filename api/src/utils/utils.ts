// Function to check if a string is a URL
export const isURL = (str: string) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};
