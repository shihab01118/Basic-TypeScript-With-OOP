{
    // Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

    // Solution:
    let myStr: string | null = null;
    myStr = "Hello World" as string;
    console.log(myStr.length)
}