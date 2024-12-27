import { createThirdwebClient } from "thirdweb";

// Initialize the Thirdweb client
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,  // Add your Thirdweb client ID to the .env file
});