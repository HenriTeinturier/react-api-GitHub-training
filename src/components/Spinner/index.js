import './spinner.scss';

function Spinner() {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">Chargement</div>
      </div>
    </div>
  );
}

export default Spinner;
