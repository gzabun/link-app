import { mount, shallowMount, flushPromises } from "@vue/test-utils";
import Toast from "../src/components/Toast.vue";

describe("Toast.vue", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = shallowMount(Toast);
  });

  it("Toast component control ", async () => {
    await flushPromises();
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.findComponent({ name: "Toast" }).exists());
  });

  it("class control", () => {
    const wrapper = mount(Toast);
    expect(wrapper.classes()).toContain("toast-wrapper");
  });

  const message = "Toast Mesaj Eklendi";
  it("Toast Props Eklenmesi", () => {
    const wrapper = mount(Toast, {
      props: {
        message: message,
      },
    });
  });
});
