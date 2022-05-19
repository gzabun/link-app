import { mount } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import New from "../src/views/New.vue";
import { default as globalStore } from "../src/store/global";

describe("New.vue", () => {
  it("class control", () => {
    const wrapper = mount(New);
    const input = wrapper.find("#name");
    input.setValue("deneme isim");
    expect(input.element.value).toBe("deneme isim");
  });

  it("class control", () => {
    const wrapper = mount(New);
    const input = wrapper.find("#link");
    input.setValue("deneme link");
    expect(input.element.value).toBe("deneme link");
  });

  it("button click triggers submit event", () => {
    const wrapper = mount(New);

    wrapper.find("#new-submit").trigger("click");
  });

  /*it("state control", () => {
    const result = globalStore.state.connections;
    console.log(result);
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "deneme isim" })])
    );
  });*/
});
