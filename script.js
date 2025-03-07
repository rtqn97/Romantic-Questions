const app = {
  currentQuestionIndex: 0,
  userName: "",
  questions: [
    {
      question: "How are you, dear?",
      options: [
        "I'm doing great, thanks for asking!",
        "Not feeling the best, but I'm hanging in there.",
        "I'd rather not talk about it right now."
      ],
      rizzLine: "I'm just doing fine but I would have been Great If I Were with you."
    },
    {
      question: "What’s something you’ve always wanted to do but never got the chance to?",
      options: [
        "Travel the world, see new places.",
        "Start my own business.",
        "Meet someone special."
      ],
      rizzLine: "If I had a chance, I’d make that dream come true... with you by my side."
    },
    {
      question: "What’s your idea of a perfect day?",
      options: [
        "Spending time outdoors, enjoying nature.",
        "A cozy day at home with a good book.",
        "Hanging out with friends and having fun."
      ],
      rizzLine: "A perfect day sounds like one with you... no matter where we are."
    },
    {
      question: "What makes you feel alive?",
      options: [
        "A good adventure.",
        "A moment of peace and quiet.",
        "Deep conversations that go beyond the surface."
      ],
      rizzLine: "What makes me feel alive? You, every time I think about you."
    },
    {
      question: "What’s the last thing that made you smile?",
      options: [
        "A funny joke from a friend.",
        "A cute animal video online.",
        "A sweet message from someone I care about."
      ],
      rizzLine: "I hope I’m the reason you smile today."
    },
    {
      question: "If you could change one thing about the world, what would it be?",
      options: [
        "Make everyone more kind and compassionate.",
        "Eliminate poverty and inequality.",
        "Make the world more environmentally friendly."
      ],
      rizzLine: "If I could change one thing... I’d make the world where you and I are always happy."
    },
    {
      question: "What’s the most meaningful compliment you’ve ever received?",
      options: [
        "That I’m a good listener.",
        "That I’m a strong person.",
        "That I make people laugh."
      ],
      rizzLine: "Your strength is what draws me to you, even when you're not looking."
    },
    {
      question: "What’s something you’ve learned recently?",
      options: [
        "How to cook a new dish.",
        "A new skill at work or school.",
        "How to manage my emotions better."
      ],
      rizzLine: "You teach me something new every time we talk."
    },
    {
      question: "What’s one thing you can’t live without?",
      options: [
        "Music.",
        "My phone and social media.",
        "A good book."
      ],
      rizzLine: "If I had to choose, I’d say I can’t live without talking to you."
    },
    {
      question: "What’s a memory that makes you laugh every time?",
      options: [
        "A funny moment with friends.",
        "Something embarrassing that happened to me.",
        "A silly family gathering."
      ],
      rizzLine: "I think I’d love to make new memories with you, and they’ll always make us laugh."
    },
    {
      question: "What’s something that scares you?",
      options: [
        "The unknown or uncertainty.",
        "Losing someone I care about.",
        "Failing at something important."
      ],
      rizzLine: "What scares me? The thought of not being there for you."
    },
    {
      question: "What do you do when you need to clear your mind?",
      options: [
        "Take a walk or hike somewhere peaceful.",
        "Listen to music and close my eyes.",
        "Talk to someone close to me."
      ],
      rizzLine: "Talking to you is the best way to clear my mind."
    },
    {
      question: "What’s the best piece of advice you’ve ever received?",
      options: [
        "Everything happens for a reason.",
        "Don’t be afraid to fail.",
        "Follow your heart."
      ],
      rizzLine: "I’d say... following my heart led me to you."
    },
    {
      question: "What’s the best gift you’ve ever received?",
      options: [
        "Something handmade.",
        "A thoughtful gesture or experience.",
        "A gift that reminded me of someone special."
      ],
      rizzLine: "The best gift? Meeting someone like you."
    },
    {
      question: "What’s something you do to relax?",
      options: [
        "Meditate or do yoga.",
        "Watch my favorite shows or movies.",
        "Read a book or listen to music."
      ],
      rizzLine: "I think spending time with you would be my ultimate relaxation."
    },
    {
      question: "What’s the most beautiful place you’ve ever been to?",
      options: [
        "A beach at sunset.",
        "A peaceful forest or park.",
        "An amazing city filled with history."
      ],
      rizzLine: "The most beautiful place? Right here, wherever I’m with you."
    },
    {
      question: "What’s something you’d like to learn or try?",
      options: [
        "Learn a new language.",
        "Try a new sport or activity.",
        "Learn how to cook a complex meal."
      ],
      rizzLine: "I’d love to learn more about you... maybe we could discover new things together."
    },
    {
      question: "What’s something that makes you feel confident?",
      options: [
        "A good outfit.",
        "A positive compliment or support from others.",
        "Accomplishing a difficult task."
      ],
      rizzLine: "You make me feel confident just by being yourself."
    },
    {
      question: "What’s something that always cheers you up?",
      options: [
        "A funny video or meme.",
        "Spending time with friends or family.",
        "A random act of kindness."
      ],
      rizzLine: "Every time I talk to you, my day gets brighter."
    },
    {
      question: "What’s your favorite season of the year?",
      options: [
        "Spring – I love the flowers blooming.",
        "Summer – I enjoy the warm weather and long days.",
        "Fall – The cozy vibes and cool weather."
      ],
      rizzLine: "No matter the season, I’d love to spend it with you."
    },
    {
      question: "What’s something you’ve been proud of lately?",
      options: [
        "Accomplishing a personal goal.",
        "Helping someone else out.",
        "Getting through a tough situation."
      ],
      rizzLine: "I’m proud of you, and I hope you know that."
    },
    {
      question: "What’s the first thing you notice about someone?",
      options: [
        "Their smile or eyes.",
        "Their energy or vibe.",
        "How they carry themselves."
      ],
      rizzLine: "What I noticed about you? Your smile lit up everything around me."
    },
    {
      question: "What’s something you wish you could tell your younger self?",
      options: [
        "Everything will work out in the end.",
        "Don’t be afraid to take risks.",
        "Trust yourself more."
      ],
      rizzLine: "I would tell my younger self: Don’t worry, love will find you... just like it found me."
    },
    {
      question: "What’s your favorite way to spend time alone?",
      options: [
        "Reading a book or writing.",
        "Going for a walk or hike.",
        "Watching a movie or listening to music."
      ],
      rizzLine: "I think I’d enjoy spending time alone with you, talking and laughing all day."
    },
    {
      question: "If you could go anywhere right now, where would it be?",
      options: [
        "A beach or tropical island.",
        "A mountain retreat or cabin.",
        "A bustling city filled with life and adventure."
      ],
      rizzLine: "Wherever we go, I’ll be happy as long as I’m with you."
    }
  ],
  init() {
    this.bindEvents();
  },
  bindEvents() {
    // Welcome Page
    document.getElementById('getStarted').addEventListener('click', () => this.startJourney());
    document.getElementById('notReady').addEventListener('click', () => this.showNotReadyMessage());

    // Question Page
    document.getElementById('nextQuestion').addEventListener('click', () => this.showWannaKnowPage());

    // Do You Wanna Know Page
    document.getElementById('yesButton').addEventListener('click', () => this.showRizzLine());
    document.getElementById('noButton').addEventListener('click', () => this.nextQuestion());

    // Rizz Line Page
    document.getElementById('nextAfterRizz').addEventListener('click', () => this.nextQuestion());

    // Final Page
    document.getElementById('share').addEventListener('click', () => this.shareExperience());

    // Show Final Final Page after 5 seconds when Final Page loads
    document.getElementById('finalPage').addEventListener('click', () => {
      setTimeout(() => {
        document.getElementById('finalFinalPage').classList.remove('hidden');
        document.getElementById('starringName').textContent = app.userName; // Add user's name
        document.getElementById('backgroundMusic').src = "Until_I_Found_You.mp3"; // Change music
        document.getElementById('backgroundMusic').play();

        // Show Restart Button after credits finish
        setTimeout(() => {
          document.getElementById('restart').classList.remove('hidden');
        }, 20000); // 20 seconds (duration of credits)
      }, 5000); // 5 seconds delay
    });

    // Restart Button
    document.getElementById('restart').addEventListener('click', () => {
      location.reload(); // Reload the page to restart
    });
  },
  startJourney() {
    this.userName = document.getElementById('userName').value;
    if (!this.userName.trim()) {
      alert("Please enter your name.");
      return;
    }
    document.getElementById('backgroundMusic').play();
    document.getElementById('petalsContainer').classList.remove('hidden');
    this.showPage('questionPage');
    this.loadQuestion();
  },
  showNotReadyMessage() {
    document.getElementById('notReadyMessage').classList.remove('hidden');
  },
  showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    this.updateProgress();
  },
  loadQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = question.options.map(option => `<button class="optionButton">${option}</button>`).join('');

    // Add event listeners to option buttons
    const optionButtons = document.querySelectorAll('.optionButton');
    optionButtons.forEach(button => {
      button.addEventListener('click', () => this.showWannaKnowPage());
    });
  },
  showWannaKnowPage() {
    this.showPage('wannaKnowPage');
  },
  showRizzLine() {
    const rizzLine = this.questions[this.currentQuestionIndex].rizzLine;
    const rizzLineText = document.getElementById('rizzLineText');
    rizzLineText.textContent = "";
    this.showPage('rizzLinePage');
    this.typeText(rizzLineText, rizzLine, () => {
      document.getElementById('nextAfterRizz').classList.remove('hidden');
    });
  },
  typeText(element, text, callback) {
    let index = 0;
    const typingEffect = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingEffect);
        if (callback) callback();
      }
    }, 30); // Adjusted typing speed to 30ms per character
  },
  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.showPage('questionPage');
      this.loadQuestion();
    } else {
      this.showPage('finalPage');
    }
  },
  updateProgress() {
    const progressText = document.getElementById('progressText');
    if (progressText) {
      progressText.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    }
  },
  shareExperience() {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copied to clipboard! Share it with others.");
    });
  }
};

app.init();
