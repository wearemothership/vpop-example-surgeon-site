// VPOP MOBILE PRO
// Referral form

document.addEventListener("DOMContentLoaded", function () {
    function getQueryParameter(name, url) {
        var params = new URL(url).searchParams;
        return params.get(name);
    }

    var scripts = document.getElementsByTagName("script");
    var currentScript = scripts[scripts.length - 1].src;

    var userID = getQueryParameter("emailId", currentScript);

    var formURL = "https://dev-app.vpop-pro.com/referral";

    var modalHTML = `
        <div id="VPOPReferralModal" class="vpop-modal" style="display:none; position:fixed; z-index:1; left:0; top:0; width:100%; height:100%; justify-content: center; align-items: center; overflow:auto; background-color:rgba(0,0,0,0.6);">
            <div class="vpop-modal-content" style="background-color:#fefefe; padding:20px; border:1px solid #888; width:80%; height:80%; max-width: 800px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.3); position:relative;">
                <span class="vpop-close" style="position:absolute; top:10px; left:10px; color:#000; font-size:25px; font-weight:bold; cursor:pointer;">&times;</span>
                <iframe id="VPOPReferralIframe" src="" width="100%" height="100%" style="border:none; border-radius: 10px;"></iframe>
            </div>
        </div>`;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    var modal = document.getElementById("VPOPReferralModal");
    var closeBtn = modal.querySelector(".vpop-close");
    var openFormButton = document.getElementById("VPOPReferralButton");

    if (!openFormButton || !modal || !closeBtn) {
        console.error("Required elements are not found in the DOM.");
        return;
    }

    openFormButton.onclick = function () {
        var iframe = document.getElementById("VPOPReferralIframe");
        if (iframe) {
            iframe.src = `${formURL}?emailId=${encodeURIComponent(userID)}`;
            modal.style.display = "flex";
        }
    };

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    var modalContent = modal.querySelector(".vpop-modal-content");
    modalContent.onclick = function (event) {
        event.stopPropagation();
    };
});