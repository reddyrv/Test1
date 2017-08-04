$(document).ready(function () {

    jQuery('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        CalAnnounceTab(this.innerHTML);

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // breadcrumb Navigation
    document.getElementById("GlobalBreadCrumbNavPopout-anchor").innerHTML = '<img style="border-width:0;position:absolute;left:-215px !important;top:-120px !important;" alt="Navigate Up" src="/_layouts/15/images/spcommon.png?rev=27">';

    // default hide
    //$("#ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager li ul").hide(); 

    // Accordion in Left Navigation
    var m = $("#ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager li").has("ul");
    for (var i = 0; i < m.length; i++) {

        var k = $("#ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager li").has("ul")[i].innerHTML;
        $("#ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager li").has("ul")[i].innerHTML =
        '<div class="magic-tricl1" style="float:left;margin-left:10px;margin-top:6px;margin-right:3px;display:none;">' +
        '<img src="/units/its_pmo/SiteCollectionImages/Nav_Down.png" alt="click" onclick="pu(' + i + ');"/></div>' +
        '<div class="magic-tricl2" style="float:left;margin-left:10px;margin-top:6px;margin-right:3px;">' +
        '<img src="/units/its_pmo/SiteCollectionImages/Nav_Up.png" alt="click" onclick="fu(' + i + ');"/></div>' + k;
    }


    if (window.location.href.indexOf(homepageName) > -1) {
        
        // Hiding New Document Icon
        $(".ms-newdocument-iconouter").hide();

        $(".ms-webpartPage-root").css("border-spacing", "0px");
        $("#MSOZoneCell_WebPartWPQ"+UniversitySystems)[0].style.visibility = 'hidden';
        $("#MSOZoneCell_WebPartWPQ"+Infrastucture)[0].style.visibility = 'hidden';
        $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning)[0].style.visibility = 'hidden';

    }
});

//Flip Flop Accordion Navaigation
function pu(i) {
    $("#ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager li ul")[i].style.display = 'block';
    $('.magic-tricl1')[i].style.display = 'none';
    $('.magic-tricl2')[i].style.display = 'block';
}

//Flip Flop Accordion Navaigation
function fu(i) {
    $("#ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager li ul")[i].style.display = 'none';
    $('.magic-tricl2')[i].style.display = 'none';
    $('.magic-tricl1')[i].style.display = 'block';
}

// Calendar Hide Show
function CalAnnounceTab(evt) {
    $("#MSOZoneCell_WebPartWPQ"+ProjectControl)[0].style.visibility = 'visible';
    $("#MSOZoneCell_WebPartWPQ"+Infrastucture)[0].style.visibility = 'visible';
    $("#MSOZoneCell_WebPartWPQ"+UniversitySystems)[0].style.visibility = 'visible';
    $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning)[0].style.visibility = 'visible';
	 $("#MSOZoneCell_WebPartWPQ"+Testing)[0].style.visibility = 'visible';
    switch (evt) {
        case "University Systems":
            {
                $("#MSOZoneCell_WebPartWPQ"+ProjectControl).hide();
                $("#MSOZoneCell_WebPartWPQ"+Infrastucture).hide();
                $("#MSOZoneCell_WebPartWPQ"+UniversitySystems).show();
                $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning).hide();
				 $("#MSOZoneCell_WebPartWPQ"+Testing).hide();
                break;
            }
        case "Infrastucture":
            {
                $("#MSOZoneCell_WebPartWPQ"+ProjectControl).hide();
                $("#MSOZoneCell_WebPartWPQ"+Infrastucture).show();
                $("#MSOZoneCell_WebPartWPQ"+UniversitySystems).hide();
                $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning).hide();
				 $("#MSOZoneCell_WebPartWPQ"+Testing).hide();
                break;
            }
        case "Integration Planning":
            {
                $("#MSOZoneCell_WebPartWPQ"+Infrastucture).hide();
                $("#MSOZoneCell_WebPartWPQ"+UniversitySystems).hide();
                $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning).show();
                $("#MSOZoneCell_WebPartWPQ"+ProjectControl).hide();
				 $("#MSOZoneCell_WebPartWPQ"+Testing).hide();
                break;
            }
		case "Testing":
            {
                $("#MSOZoneCell_WebPartWPQ"+ProjectControl).hide();
                $("#MSOZoneCell_WebPartWPQ"+Infrastucture).hide();
                $("#MSOZoneCell_WebPartWPQ"+UniversitySystems).hide();
                $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning).hide();
				 $("#MSOZoneCell_WebPartWPQ"+Testing).show();
        case "Project Control":
            {
                $("#MSOZoneCell_WebPartWPQ"+ProjectControl).show();
                $("#MSOZoneCell_WebPartWPQ"+Infrastucture).hide();
                $("#MSOZoneCell_WebPartWPQ"+UniversitySystems).hide();
                $("#MSOZoneCell_WebPartWPQ"+IntegrationPlanning).hide();
				 $("#MSOZoneCell_WebPartWPQ"+Testing).hide();
                break;
				
            }
    }
}





