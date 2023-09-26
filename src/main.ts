
export const len = (str: string): number => {
    return str.length;
};

export const pali = (str: string): boolean => {
    return str === str.split("").reverse().join("");
};

export const upSort = (arr: number[]): number[] => {
    return arr.sort();
}

export const sqrt = (num: number): number => {
    if (num < 0) throw new Error("Enter only num grater than zero!!!")
    return Math.sqrt(num);
}

export const sumArray = (arr: number[]): number => {
    let sum: number = 0;
    arr.forEach(num => sum += num);
    return sum;
}

export const fetchUserData = async (userId: string): Promise<any> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error("Error fetching user data");
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; 
    }
};


export const fibonatsi = (arr: number[]) => {
    const lenArr = arr.length;
    return arr[lenArr - 1] + arr[lenArr - 2];
}