import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

const generateSignedUrl = (): string => {
  const cloudfrontDomain: string | undefined = process.env.CLOUDFRONT_DOMAIN;
  const fileName: string = "stock-videos/combined_forest.mp4";
  const privateKey: string | undefined =
    process.env.CLOUDFRONT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const keyPairId: string | undefined = process.env.CLOUDFRONT_KEY_PAIR;

  if (!cloudfrontDomain || !privateKey || !keyPairId) {
    throw new Error("Missing required CloudFront environment variables");
  }

  try {
    const dateLessThan: string = new Date(
      Date.now() + 30 * 60 * 1000
    ).toISOString();

    const signedUrl: string = getSignedUrl({
      url: `https://${cloudfrontDomain}/${fileName}`,
      keyPairId,
      privateKey,
      dateLessThan,
    });

    return signedUrl;
  } catch (error) {
    const err = error as Error;
    console.error("Error generating signed URL:", err.message);
    throw err;
  }
};

export { generateSignedUrl };
