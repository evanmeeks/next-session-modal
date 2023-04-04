/* eslint-disable react/prop-types */
import React, { useCallback } from "react"
import Button from "../Button"
import { ReactPortal } from "../utils"
import CircularProgressBar from "../CircularProgressBar"

interface ModalProps {
  modalTitle?: string
  modalMessage?: string | JSX.Element
  okText?: string
  cancelText?: string
  okAction?: () => void
  cancelAction?: () => void
  showModal: boolean
  time?: number
}

const TimeoutModal: React.FC<ModalProps> = React.forwardRef(
  (
    {
      time,
      modalTitle,
      modalMessage,
      okText,
      cancelText,
      okAction,
      cancelAction,
      showModal,
    },
    ref
  ) => {
    const [show, setShow] = React.useState(showModal)

    const cancelHandler = useCallback(() => {
      return cancelAction && cancelAction()
    }, [cancelAction])

    const close = React.useCallback(() => setShow(false), [])

    React.useImperativeHandle(
      ref,
      () => ({
        open: () => setShow(true),
        close,
      }),

      []
    )

    React.useEffect(() => {
      setShow(showModal)
    }, [showModal])

    if (!show) return null
    return (
      <ReactPortal wrapperId="react-portal-modal-container">
        <div>
          <div className="absolute top-[10%] left-0 flex justify-center z-[1055] w-full overflow-y-auto overflow-x-hidden outline-none">
            <div className=" bg-white rounded-xl mx-4 my-2 p-3">
              {modalTitle && (
                <h3 className="text-6xl pt-2 pb-0 text-blue-600 text-center font-normal">
                  {modalTitle}
                </h3>
              )}
              <div className="p-6 flex-auto">
                <div className="my-2 text-blueGray-500 leading-relaxed">
                  <div className="flex text-2xl items-center flex-col content-around justify-around ">
                    {modalMessage}
                  </div>
                  <div>
                    <div className="flex justify-around mt-9">
                      <CircularProgressBar
                        strokeWidth={8}
                        sqSize={75}
                        percentage={time}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-center rounded-b pt-7">
                {cancelAction && (
                  <Button
                    className="mw-[190px] w-full"
                    onClick={cancelHandler}
                    variant="default"
                  >
                    {cancelText}
                  </Button>
                )}
                {okAction && (
                  <Button
                    className="w-full"
                    onClick={() => {
                      okAction()
                      close()
                    }}
                    variant="primary"
                  >
                    {okText}
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      </ReactPortal>
    )
  }
)

export default TimeoutModal
