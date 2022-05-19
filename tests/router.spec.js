import { mount, flushPromises } from "@vue/test-utils";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import List from "@/views/List";
import New from "@/views/New";

describe("router", () => {
  let wrapper;

  beforeAll(async () => {
    await router.push("/");
    await router.isReady();

    wrapper = await mount(App, {
      global: {
        plugins: [router, store],
      },
    });
  });

  it("List", async () => {
    await router.push("/"); //ilgili rotaya git

    await flushPromises(); //vue js calismasini bekle

    //Login komponenti render oldumu kontrol et
    //komponent varsa test basarili bir sekilde sonlanir
    expect(wrapper.findComponent(List).exists()).toBe(true);
  });
  it("New", async () => {
    await router.push("/new");

    await flushPromises();

    expect(wrapper.findComponent(New).exists()).toBe(true);
  });

  it("beforeEach", () => {
    const to = {
      matched: [{ meta: {} }],
    };
    const next = jest.fn();
    router.beforeEach(to, undefined, next);
  });
});
