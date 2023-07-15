var arr=[
    {
        text :'“Be yourself; everyone else is already taken.”' ,
        writer : '― Oscar Wilde'
    },
    {
        text:'“So many books, so little time.”' ,
        writer:'― Frank Zappa'
    },

    {
        text:'“For every minute you are angry you lose sixty seconds of happiness.”' ,
        writer:'― Ralph Waldo Emerson'
    },
    {
        text:'“If I had a flower for every time I thought of you...I could walk through my garden forever.”' ,
        writer:'― Alfred Tennyson'
    },
    {
        text:'“Be the change that you wish to see in the world.”',
        writer:'― Mahatma Gandhi'
    },
    {
        text:'“You only live once, but if you do it right, once is enough.”' ,
        writer:'― Mae West'
    }
]
function displayarr(){
    var x=Math.floor(Math.random() *(arr.length))
    document.getElementById('demo').innerHTML=arr[x].text
    document.getElementById('writer').innerHTML=arr[x].writer   
}
