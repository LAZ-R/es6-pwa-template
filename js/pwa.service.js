export const setHTMLTitle = (pageTitle) => {
  const title = document.getElementById('title');
  title.innerHTML = pageTitle;

  const appleTitle = document.getElementById('appleTitle');
  appleTitle.setAttribute('content', pageTitle);
}