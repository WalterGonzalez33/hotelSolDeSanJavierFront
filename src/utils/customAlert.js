import Swal from "sweetalert2";

export const showCustomAlert = ({
    alertTitle = 'Joya',
    icon = 'success',
    confirmText = 'confirmar',
    cancelText = 'cancelar',
    alertText = 'Todo perfecto',
    showCancel = false,
    continueConfirm = false,
    callback = null,
}) => {
    Swal.fire({
      title: alertTitle,
      text: alertText,
      icon: `${icon}`,
      showCancelButton: showCancel,
      confirmButtonColor: "#95c46c",
      cancelButtonColor: "#ff8a7a", 
      confirmButtonText: `${confirmText}`,
      cancelButtonText: `${cancelText}`,
      background: "#f4f6f7", 
      color: "#333",
      customClass: {
        title: "my-title-class",
        popup: "my-popup-class",
        confirmButton: "my-confirm-btn-class",
        cancelButton: "my-cancel-btn-class",
      },
    }).then((result) => {
        if(continueConfirm){
            if (result.isConfirmed) {
                    callback()
              }
        }
    });
  };