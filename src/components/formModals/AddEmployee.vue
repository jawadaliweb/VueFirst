<template>
    <div style="line-height: 2.5">
        <div class="form-group">
            <label for="name"> Name </label>
            <input
                type="text"
                class="form-control"
                placeholder="Enter name"
                v-model="form.name.$model"
            />

            <div v-for="error in form.name.$errors">
                <p
                    style="font-size: 15px; padding: 0px; padding-left: 20px"
                    class="alert alert-sm alert-danger mt-2"
                >
                    {{ error.$message }}
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                v-model="form.email.$model"
            />

            <div v-for="error in form.email.$errors">
                <p
                    style="font-size: 15px; padding: 0px; padding-left: 20px"
                    class="alert alert-sm alert-danger mt-2"
                >
                    {{ error.$message }}
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="phone"> Phone</label>
            <input
                value="2232321"
                v-model="form.phone.$model"
                @keypress="isNumber($event)"
                type="text"
                class="form-control"
                placeholder="Enter phone"
            />

            <div v-for="error in form.phone.$errors">
                <p
                    style="font-size: 15px; padding: 0px; padding-left: 20px"
                    class="alert alert-sm alert-danger mt-2"
                >
                    {{ error.$message }}
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="city"> City</label>
            <input
                value="asdasd"
                v-model="form.city.$model"
                type="text"
                class="form-control"
                placeholder="Enter city"
            />
        </div>

        <div v-for="error in form.city.$errors">
            <p
                style="font-size: 15px; padding: 0px; padding-left: 20px"
                class="alert alert-sm alert-danger mt-2"
            >
                {{ error.$message }}
            </p>
        </div>

        <div class="form-group">
            <label for="Experience"> Experience</label>
            <input
                type="text"
                value="232"
                v-model="form.experience.$model"
                class="form-control"
                placeholder="Enter Experience"
            />
        </div>

        <div v-for="error in form.experience.$errors">
            <p
                style="font-size: 15px; padding: 0px; padding-left: 20px"
                class="alert alert-sm alert-danger mt-2"
            >
                {{ error.$message }}
            </p>
        </div>

        <div class="form-group">
            <label for="Holidays"> Holidays</label>
            <input
                type="text"
                value="23"
                v-model="form.holidays.$model"
                class="form-control"
                placeholder="Enter Holidays"
            />
        </div>

        <div v-for="error in form.holidays.$errors">
            <p
                style="font-size: 15px; padding: 0px; padding-left: 20px"
                class="alert alert-sm alert-danger mt-2"
            >
                {{ error.$message }}
            </p>
        </div>

        <div class="form-group">
            <label for="Salary"> Salary</label>
            <input
                v-model="form.salary.$model"
                @keypress="isNumber($event)"
                type="text"
                class="form-control"
                placeholder="Enter Salary"
                value="2322"
            />
            <div v-for="error in form.salary.$errors">
                <p
                    style="font-size: 15px; padding: 0px; padding-left: 20px"
                    class="alert alert-sm alert-danger mt-2"
                >
                    {{ error.$message }}
                </p>
            </div>
        </div>
        <div class="form-group">
            <label for="Address"> Address</label>
            <input
                v-model="form.address.$model"
                type="text"
                class="form-control"
                placeholder="Enter Address"
                value="23"
            />

            <div v-for="error in form.address.$errors">
                <p
                    style="font-size: 15px; padding: 0px; padding-left: 20px"
                    class="alert alert-sm alert-danger mt-2"
                >
                    {{ error.$message }}
                </p>
            </div>
        </div>

        <div class="form-group">
            <label for="image"> Image</label>
            <input
                type="file"
                ref="imageInput"
                @change="handleImageChange"
                class="form-control"
            />
            <div v-for="error in form.image.$errors">
                <p
                    style="font-size: 15px; padding: 0px; padding-left: 20px"
                    class="alert alert-sm alert-danger mt-2"
                >
                    {{ error.$message }}
                </p>
            </div>
        </div>

        <button class="btn btn-success mt-4" @click="submitForm">Submit</button>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
    required,
    minLength,
    alpha,
    email,
    numeric,
    // fileSize,
    // fileExtensions
} from "@vuelidate/validators";

import { reactive } from "vue";

// import { defineProps } from "vue";

export default {
  data () {
    return {
    }
  },
    props: ["onAdd"],
    methods: {
        isNumber(evt) {
            const charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            }
        },
    },
    name: "App",
    setup(props) {
        // const props = defineProps(['onAdd'])
        const { onAdd } = props;

        const rules = {
            name: {
                required,
                alpha,
                minLength: minLength(5),
            },

            email: {
                required,
                email,
            },
            phone: {
                required,
                numeric,
            },
            experience: {
                required,
            },
            holidays: {
                required,
            },
            city: {
                required,
            },
            salary: {
                required,
            },
            image: {
                required,
                // fileSize: fileSize(5000000), // Example: maximum file size is 5 MB
                // fileExtensions: fileExtensions(["jpg", "jpeg", "png"]),
            },
            address: {
                required,
            },
        };
        const state = reactive({
            name: "",
            email: "",
            phone: "",
            salary: "",
            experience: "",
            city: "",
            holidays: "",
            address: "",
            image: null,
        });
        const form = useVuelidate(rules, state);

        const handleImageChange = (event) => {
            const file = event.target.files[0];
            state.image = file; // Update the image property in the state
        };

        const submitForm = async () => {
            if (form.$pending) {
                // Don't submit the form if there are pending validations
                return;
            }

            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/employee/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(state),
                    }
                );

                if (response.ok) {
                    response.text().then((data) => {
                        onAdd(data);
                    });
                    // Data was successfully submitted
                    console.log("Data submitted successfully");
                    // Access fetchData from the setup function
                } else {
                    // Log the response status and details for troubleshooting
                    console.error(
                        "Failed to submit data to the API:",
                        response.status,
                        response.statusText
                    );
                    const responseBody = await response.text();
                    console.error("Response body:", responseBody);
                }
            } catch (error) {
                // Handle network or other errors
                console.error("Error submitting data:", error);
            }
        };

        return { form, handleImageChange, submitForm };
    },
};
</script>
