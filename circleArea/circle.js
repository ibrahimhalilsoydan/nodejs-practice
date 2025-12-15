
export const circleArea = (r) => {
    const area = Math.PI * (r * r);
    console.log(`Yarıçapı (r) ${r} olan dairenin alanı: ${area.toFixed(2)}`);
};

export const circleCircumference = (r) => {
    const circumference = 2 * Math.PI * r;
    console.log(`Yarıçapı (r) ${r} olan dairenin çevresi: ${circumference.toFixed(2)}`);
};