// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


var quotes=[
		{
			quote: 'Imagination is more important than knowledge.' ,
			source:"-Albert Einstein"
	    },
	    {
	    	quote:'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
	    	source:"-Albert Einstein"
	    },
	    {
	    	quote:'It does not matter how slowly you go as long as you do not stop. ',
	    	source:"-Confucius"
	    },
	    {
	    	quote:'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
	    	source:"-Thomas A. Edison"
	    },
	    {
	    	quote:'Doubt is only removed by action. If you’re not working then that’s where doubt comes in.',
	    	source:"-Conor McGregor"
	    },
	    {
	    	quote:'Do not watch the clock; do what it does. Keep going.',
	    	source:"-Sam Levenson"
	    },
	    {
	    	quote:'I have never encountered a winner that held hate towards something.',
	    	source:"-Conor McGregor"
	    },
	    {
	    	quote:'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
	    	source:"-Ayn Rand"
	    },
	    {
	    	quote:'Start where you are. Use what you have. Do what you can.',
	    	source:"-Arthur Ashe"
	    },
	    {
	    	quote:'I’m just going to keep doing what I’m doing. Keep proving people wrong and proving myself right.',
	    	source:"-Conor McGregor"
	    },
	    {
	    	quote:'Be yourself; everyone else is already taken.',
	    	source:"-Oscar Wilde"
	    },
	    {
	    	quote:'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
	    	source:"-Albert Einstein"
	    },
	    {
	    	quote:'Always remember that you are absolutely unique. Just like everyone else.',
	    	source:"-Margaret Mead"
	    },
	    {
	    	quote:'Do not take life too seriously. You will never get out of it alive.',
	    	source:"-Elbert Hubbard"
	    },
	    {
	    	quote:'People who think they know everything are a great annoyance to those of us who do.',
	    	source:"-Isaac Asimov"
	    },
	    {
	    	quote:'Procrastination is the art of keeping up with yesterday.',
	    	source:"-Don Marquis"
	    },
	    {
	    	quote:'Get your facts first, then you can distort them as you please.',
	    	source:"-Mark Twain"
	    },
	    {
	    	quote:'A day without sunshine is like, you know, night.',
	    	source:"-Steve Martin"
	    },
	    {
	    	quote:'My grandmother started walking five miles a day when she was sixty. She is ninety-seven now, and we do not know where the hell she is.',
	    	source:"-Ellen DeGeneres"
	    },
	    {
	    	quote:'Do not sweat the petty things and do not pet the sweaty things.',
	    	source:"-George Carlin"
	    },
	    {
	    	quote:'Always do whatever is next.',
	    	source:"-George Carlin"
	    },
	    {
	    	quote:'Hapiness is not something ready made. It comes from your own actions.',
	    	source:"-Dalai Lama"
	    },
	    {
	    	quote:'You create your own universe as you go along.',
	    	source:"-Winston Churchill"
	    },
	    {
	    	quote:'What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.',
	    	source:"-Mark 11:24"
	    },	    
	    {
	    	quote:'All that we are is a result of what we have thought.',
	    	source:"-Buddha"
	    },	    
	    {
	    	quote:'Imagination is everything. It is the preview of life’s coming attractions.',
	    	source:"-Albert Einstein"
	    },	    
	    {
	    	quote:'Whatever the mind can conceive it can achieve.',
	    	source:"-W. Clement Stone"
	    },	    
	    {
	    	quote:'Whether you think you can or think you can’t, either way you are right.',
	    	source:"-Henry Ford"
	    },	    
	    {
	    	quote:'Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.',
	    	source:"-Muhammad Ali"
	    },	    
	    {
	    	quote:'We are always getting ready to live but never living.',
	    	source:"-Ralph Waldo Emerson"
	    },	    
	    {
	    	quote:'Happiness is not a destination. It is a method of life.',
	    	source:"-Burton Hills"
	    },	    

	];

var viewedQuotes =[];

	const getRandomQuote = () => {
    var theQuote = Math.floor(Math.random() * quotes.length);
    var splicedQuote = quotes.splice(theQuote, 1)[0];
    viewedQuotes.push(splicedQuote);
    if (quotes.length == 0) {
      quotes.push(viewedQuotes);
      viewedQuotes = [];
    }
    return quotes[theQuote];
}


const printQuote = () => {
    var selectedRandomQuote = getRandomQuote();
  var html = '<p class="quote">' + selectedRandomQuote.quote + '</p>'
  + '<p class="source">' + selectedRandomQuote.source;
  document.getElementById('quote-box').innerHTML = html;

}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
