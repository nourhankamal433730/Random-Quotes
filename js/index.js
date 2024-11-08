let arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },

    {'author': 'Oscar Wilde', 
    'quote': 'To live is the rarest thing in the world. Most people exist, that is all'
    },

    {'author': 'Andre Gide', 
    'quote': 't is better to be hated for what you are than to be loved for what you are not.'
    },
];

function createQuote() {

    const randomIndex =  Number.parseInt(Math.random() * arrayOfQuotes.length +1);
    const randomQuote = arrayOfQuotes[randomIndex];

    document.getElementById("Quote").innerText = `"${randomQuote.quote}"`;
    document.getElementById("Author").innerText = `- ${randomQuote.author}`;
}