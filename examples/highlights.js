window.onload = function () {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        // alert("onLoad");

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
            var regex = /( |<([^>]+)>)/ig;
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            var draft = document.getElementById("poem-draft");
            var lines = draft.innerHTML.split("<br>");
            var plain_lines = document.getElementById("poem-draft-plain").innerHTML.split("<br>");
            var matched_inst = document.getElementById("matched-instructions").innerHTML.split("<br>");
            var options = content.innerHTML.split("<br>");
            var updated = "";
            for(j=0; j<matched_inst.length; j++) {
                var current_inst = matched_inst[j];
                var found = false;
                for(k=0; k<options.length; k++) {
                    var option = options[k].trim() //.replace("<p>", "").replace("</p>", "");
                    if(option.trim().replace(regex, "") == current_inst.trim().replace(regex, "")) {
                        found = true;
                    }
                }
                if(found) {
                        updated+=plain_lines[j]+"<br>";
                }
                else {
                    updated+=lines[j]+"<br>";
                }
            }
            draft.innerHTML = updated;
            } else {
            content.style.display = "block";
            var draft = document.getElementById("poem-draft");
            var lines = draft.innerHTML.split("<br>")
            var highlighted_lines = document.getElementById("poem-draft-highlighted").innerHTML.split("<br>");
            var matched_inst = document.getElementById("matched-instructions").innerHTML.split("<br>");
            var options = content.innerHTML.split("<br>");
            var updated = "";
            for(j=0; j<matched_inst.length; j++) {
                var current_inst = matched_inst[j];
                var found = false;
                for(k=0; k<options.length; k++) {
                    var option = options[k].trim(); //.replace("<p>", "").replace("</p>", "");
                    // console.log(option)
                    // console.log(option.replace(regex, ""))
                    // console.log(current_inst.trim().replace(regex, ""))
                    if(option.replace(regex, "") == current_inst.trim().replace(regex, "")) {
                        found = true;
                        // alert("Found")
                        break;
                    }
                }
                if(found) {
                        updated+=highlighted_lines[j]+"<br>";
                }
                else {
                    updated+=lines[j]+"<br>"
                }
            }
            draft.innerHTML = updated;
            }
            });
        }
    }
