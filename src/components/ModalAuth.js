import React, { useEffect, useState } from "react";
import * as Webcam from "webcamjs";
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import { useDispatch } from "react-redux";
export default function ModalAuth(props) {
  const [type, setType] = useState("");
  const [fingerprint, setFingerprint] = useState("");
  useEffect(() => {
    $("#modalAuth").modal(props.isVisible ? "show" : "hide");
    if (props.isVisible) {
      Webcam.set({
        width: 350,
        height: 350,
        image_format: "png",
      });
    }
  }, [props.isVisible]);
  useEffect(() => {
    if (type === "face") {
      Webcam.attach("#webcam");
    }
  }, [type]);
  async function takePicture() {
    const getBase64 = await new Promise((resolve, reject) => {
      Webcam.snap(function (dataUri) {
        resolve(dataUri);
      });
    });
    props.login(type, getBase64);
    Webcam.reset();
    setType("");
    props.setIsVisible(false);
  }
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  return (
    <div
      class="modal fade"
      id="modalAuth"
      tabindex="-1"
      aria-labelledby="modalAuthLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="modalAuthLabel">
              Forma de Autenticação
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                aria-hidden="true"
                onClick={(e) => {
                  setType("");
                  props.setIsVisible(false);
                }}
              >
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body d-flex">
            {!type ? (
              <>
                <div className="w-50 text-center p-5 d-flex flex-column">
                  <span class="fas fa-user-alt h1"></span>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      setType("face");
                    }}
                  >
                    Reconhecimento Facial
                  </button>
                </div>
                <div className="w-50 text-center p-5 d-flex flex-column">
                  <span class="fas fa-fingerprint h1"></span>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      setType("fingerprint");
                    }}
                  >
                    Biometria
                  </button>
                </div>
              </>
            ) : type === "face" ? (
              <>
                <div className="mx-auto">
                  <div id="webcam"></div>
                  <div className="mt-5 text-center">
                    <button className="btn btn-primary" onClick={takePicture}>
                      Login
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mx-auto">
                  <span>Biometria</span>
                  <br />
                  {!fingerprint ? (
                    <div class="btn btn-default btn-file btn-danger">
                      Selecione a Imagem
                      <input
                        type="file"
                        onChange={async (e) => {
                          setFingerprint(await toBase64(e.target.files[0]));
                        }}
                      />
                    </div>
                  ) : (
                    <img
                      className="m-1"
                      src={fingerprint}
                      style={{ width: 150, height: 150 }}
                      alt=""
                    />
                  )}
                  {fingerprint ? (
                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary"
                        onClick={async(e) => {
                          console.log(fingerprint)
                          await props.login(type, fingerprint);
                          setFingerprint("");
                          setType("");
                          props.setIsVisible(false);
                        }}
                      >
                        Login
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={(e) => {
                setType("");
                props.setIsVisible(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
