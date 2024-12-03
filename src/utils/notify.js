import { toast } from "react-toastify"
export const notify =(data)=>{
  toast(data,{
  className:'custom-toast',
  progressClassName:'custom-progress-login',
  style:{color:'white',fontFamily:'Poppins',fontWeight:'bold',textAlign:'center',fontSize:'15px'}
  })
  }

  export const Promisenotify =(promisedata,pendingMsg,SuccessMsg,errorMsg1,errorMsg2)=>{
    toast.promise(
      promisedata,
      {
        pending: pendingMsg,
        success: SuccessMsg,
        error: {
          render({ data }) {
            if (data && data.status === 400) {
              return errorMsg1;
            }
            return errorMsg2;
          },
        },
      },
    );
  }
  
  