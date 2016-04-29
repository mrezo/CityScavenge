var GameWindow = ({map}) =>
<div>
    <h3>Current Game: FIND THE CROISSANT</h3>
    <div className="game-map">
        <img src={map} />
    </div>
</div>

window.GameWindow = GameWindow;
