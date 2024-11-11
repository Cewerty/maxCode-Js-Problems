function clockAngle(time) {
    const times_array = time.split(":").map((time) => parseInt(time));
    const [hours, mins] = times_array;
    const hours_pos = 30 * hours + 0.5 * mins;
    const mins_pos = 6 * mins;
    const rad = Math.min(hours_pos-mins_pos, 180) !== 180 ? -(hours_pos-mins_pos): hours_pos-mins_pos;
    console.log(rad);
    return rad >= 180 ? Math.abs(rad - 360) : Math.abs(rad); 
}

console.log(clockAngle("1:50")); // 90

