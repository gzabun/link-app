import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App.vue", () => {
  it("App component", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain("<router-view></router-view>");
  });
});
