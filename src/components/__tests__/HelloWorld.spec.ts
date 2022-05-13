import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Friend" } });
    expect(wrapper.text()).toContain("Hello Friend");
  });

  it("renders properly again", () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: "Hello again, my friend" },
    });
    expect(wrapper.text()).toContain("Hello again, my friend");
  });
});
