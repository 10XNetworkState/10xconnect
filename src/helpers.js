export const getDisplayName = (user) =>
  user.ProfileEntryResponse?.Username ?? user.PublicKeyBase58Check;

export const getPublicKey = (user) =>
  user.PublicKeyBase58Check;
