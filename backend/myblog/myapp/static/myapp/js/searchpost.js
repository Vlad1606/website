
function searchPosts(query) {
    const posts = document.querySelectorAll('article.post');
  
    posts.forEach(post => post.classList.remove('highlight'));
  
    
    let foundMatch = false;
    posts.forEach(post => {
      const metaElement = post.querySelector('p.post-meta');
  
      if (metaElement) {
        
        const descriptionText = metaElement.textContent.toLowerCase();
        if (descriptionText.includes(query.toLowerCase())) {
          
          post.classList.add('highlight');
          
          post.scrollIntoView({ behavior: 'smooth' });
          foundMatch = true;
        }
      }
    });
  
    
    if (!foundMatch) {
      alert('No matching posts found.');
    }
  }
  
  
  document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query !== '') {
      searchPosts(query);
    } else {
      alert('Please enter some text to search.');
    }
  });

  