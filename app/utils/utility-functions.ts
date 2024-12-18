export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`; // Format the date as MM/DD/YYYY
};

export const formatTimeDifference = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date(); // Current date and time

  const timeDifference = now.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds} seconds ago`; // Less than a minute ago
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`; // Less than an hour ago
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`; // Less than a day ago
  } else if (days < 7) {
    return `${days} day${days > 1 ? "s" : ""} ago`; // Less than a month ago
  } else if (weeks < 5) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`; // Less than a month ago
  } else if (months < 12) {
    return `${months} month${months > 1 ? "s" : ""} ago`; // Less than a year ago
  } else {
    return `${years} year${years > 1 ? "s" : ""} ago`; // More than a year ago
  }
};
