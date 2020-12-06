import { useEffect } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";

export default function Loading(props) {
  const showLoading = useSelector((state) => state.showLoading);
  useEffect(() => {
    console.log("MUDEI");
    console.log(showLoading.show);
    $("#loading").modal(showLoading.show ? "show" : "hide");
    if (!showLoading.show) {
      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();
    }
  }, [showLoading]);
  return showLoading.show ? (
    <div
      class="modal fade"
      id="loading"
      tabindex="-1"
      aria-labelledby="loadingLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div
          className="d-flex flex-column mx-auto justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <span className="text-light text-center h1">
            {showLoading.message}
          </span>
          <div class="spinner-border text-light mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
