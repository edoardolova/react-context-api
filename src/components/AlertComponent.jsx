import { useAlert } from "../contexts/AlertContext";

function AlertComponent() {
  const { alert, setAlert } = useAlert();

  if (!alert.errorMessage) return null;

  const handleClose = () => {
    setAlert({ title: "", errorMessage: null });
  };

  return (
    <div className="alert alert-danger alert-dismissible fade show fixed-top m-0 rounded-0 text-center" role="alert" style={{ zIndex: 1050 }}>
        <div>
            <strong>{alert.title}</strong>
            <div>
                {alert.errorMessage}
            </div>
        </div>
        <button type="button" className="btn-close position-absolute end-0 me-3 mt-2" aria-label="Close" onClick={handleClose}></button>
    </div>
  );
}

export default AlertComponent;
