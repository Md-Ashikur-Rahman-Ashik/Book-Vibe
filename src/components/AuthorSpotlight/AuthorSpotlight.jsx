const AuthorSpotlight = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Author Spotlight: Jane Doe</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Biography:</h2>
        <p className="text-gray-700">
          Jane Doe was born on July 15, 1985, in New York City. She showed an
          early interest in writing, penning her first short story at the age of
          10. Jane pursued her passion for literature by studying English
          Literature at Columbia University. After graduating, she embarked on a
          journey to pursue her writing career, publishing her debut novel at
          the age of 25.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Published Works:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            *The Secret Garden* (2010) - A heartwarming tale of friendship and
            discovery set in the English countryside.
          </li>
          <li>
            *Echoes of Eternity* (2014) - A gripping mystery novel that keeps
            readers on the edge of their seats until the very end.
          </li>
          <li>
            *The Last Sunset* (2018) - An epic fantasy adventure filled with
            magic, intrigue, and unforgettable characters.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Author's Insights:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            "I find inspiration in the beauty of nature, which often influences
            the themes of my writing."
          </li>
          <li>
            "My writing process involves immersing myself in the world of my
            characters, allowing me to tell their stories authentically."
          </li>
          <li>
            "Advice to aspiring writers: Never give up on your dreams, and
            always believe in the power of your words."
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Reader Reviews:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            "*The Secret Garden* is a masterpiece! Jane Doe's storytelling
            transports you to another world."
          </li>
          <li>
            "*Echoes of Eternity* kept me guessing until the very end. I
            couldn't put it down!"
          </li>
          <li>
            "*The Last Sunset* is an epic fantasy that will leave you craving
            for more. Can't wait for Jane Doe's next book!"
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Explore More:</h2>
        <p className="text-gray-700">
          Discover more about Jane Doe's books and upcoming projects on her
          official website and social media channels. Join her community of
          readers for exclusive updates, events, and giveaways.
        </p>
      </div>
    </div>
  );
};

export default AuthorSpotlight;
