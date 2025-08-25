import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

const generateSignedUrl = () => {
  const cloudfrontDomain = process.env.CLOUDFRONT_DOMAIN;
  const fileName = "stock-videos/combined_forest.mp4";

  // Convert multi-line private key (with \n) from an env variable
  const privateKey = process.env.CLOUDFRONT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  try {
    // Set dateLessThan to 30 minutes from now
    const dateLessThan = new Date(Date.now() + 30 * 60 * 1000).toISOString();

    // Generate a signed URL using a custom policy
    const signedUrl = getSignedUrl({
      url: `https://${cloudfrontDomain}/${fileName}`,
      keyPairId: process.env.CLOUDFRONT_KEY_PAIR,
      privateKey,
      dateLessThan,
    });

    return signedUrl;
  } catch (error) {
    console.error("Error generating signed URL:", error.message);
    throw error;
  }
};

export { generateSignedUrl };
