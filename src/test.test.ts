import * as funcs from "./main";
import { expect, test, describe } from "vitest";

test("'len': Length to string.", () => {
    expect(funcs.len("hello")).toBe(5);
});

describe("'pali': Check if palindrome.", () => {
    test("Palindrome is true.", () => {
        expect(funcs.pali("abcba")).toBeTruthy();
    });

    test("Palindrome is false.", () => {
        expect(funcs.pali("abcde")).toBeFalsy();
    })
});

test("'upSort': if arr sorted.", () => {
    expect(funcs.upSort([4, 2, 3])).toEqual([2, 3, 4]);
});

test("'sqrt': if this sqrt to num.", () => {
    expect(funcs.sqrt(25)).toEqual(5);
});

test("'sqrt': if error sqrt to num.", () => {
    expect(() => funcs.sqrt(-1)).throw();
});

describe("'sumArray': Sum of every number.", () => {
    test("Sum corect.", () => {
        expect(funcs.sumArray([2, 4, 6, 3])).toBe(15);
    })

    test("Greater this 9.", () => {
        expect(funcs.sumArray([2, 4, 6, 3])).toBeGreaterThan(9);
    })

    // test("In number spesifik.", () => {
    //     expect(funcs.sumArray([2, 4, 6, 3])).to(6);
    // })
})

describe("resiv user", () => {
    const user = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }

    test("Resiv ssuccfuly.", async () => {
        await expect(funcs.fetchUserData("1")).resolves.toEqual(user);
    });

    test("resiv error.", async () => {
        await expect(funcs.fetchUserData("20")).rejects.toThrow("Error fetching user data");
    });
})