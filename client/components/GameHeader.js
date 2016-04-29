var GameHeader = ({user}) =>
<div>
    <button type="button">Start Game</button>
    <span className='user-name'>Current User: {user} </span>
</div>

window.GameHeader = GameHeader;
