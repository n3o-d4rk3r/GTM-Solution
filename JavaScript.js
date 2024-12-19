<!-- Button to trigger the event example-->
<button id="contactButton" type="button">I'M DONE, CONTACT ME!</button>

<script type="text/javascript">
    document.getElementById('contactButton').addEventListener('click', function() {
        dataLayer.push({
            event: "ontrack_appointment_form",
            ecommerce: {
                Website: "https://htownchemdry.com",
                Trigger: "https://htownchemdry.com/ontrack-appointment",
                items: [ 
                    {
                        first_name: "{{First Name}}",
                        last_name: "{{Last Name}}",
                        email: "{{Email}}",
                        phone_number: "{{Phone Number}}",
                        type: "{{Resident}}",
                        street_address: "{{Street Address}}",
                        city: "{{City}}",
                        state: "{{State}}",
                        zip_code: "{{ZIP Code}}"
                    }
                ]
            }
        });.
    });
</script>
