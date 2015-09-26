export default function(salary) {
    let lumpsum = 3572,
        threshold = 37000,
        rate = 0.325,
        difference = salary - threshold,
        other = difference * rate;

    return salary - (other + lumpsum);
}
