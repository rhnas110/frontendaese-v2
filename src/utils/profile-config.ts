/**
 * Calculate age from date of birth string
 * @param dobString - Date of birth in format "DD-MM-YYYY"
 * @returns Age in years
 */
export const calculateAge = (dobString: string): number => {
  const [day, month, year] = dobString.split("-").map(Number);
  const dob = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
};

/**
 * Get profile configuration from environment variables
 */
export const getProfileConfig = () => {
  const name = import.meta.env.VITE_PROFILE_NAME;
  const dob = import.meta.env.VITE_DOB;
  const age = calculateAge(dob);
  const title = import.meta.env.VITE_PROFILE_TITLE;
  const hobby = import.meta.env.VITE_PROFILE_HOBBY.split(",").map((h: string) =>
    h.trim(),
  );
  const isMarried = import.meta.env.VITE_PROFILE_IS_MARRIED == "true";

  return {
    name,
    age,
    title,
    hobby,
    isMarried,
  };
};
