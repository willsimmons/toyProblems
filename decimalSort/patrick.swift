#!/usr/bin/env swift
import Foundation

/* Problem
 * Sort nums using only the fractional portion of each number.
 * So under this ordering 50.40 is bigger than 100.09
*/

func generateRandomNumbers() -> [Float] {
    var numbers: [Float] = []
    for _ in 1...100 {
        let integerPart = Float(arc4random() % 1000);
        let fractionalPart = Float(arc4random() % 1000) / 1000.0
        numbers.append(integerPart + fractionalPart);
    }
    return numbers;
}

let sortedNumbers = generateRandomNumbers().sorted(by: { (a, b) -> Bool in
    let fractionalPartA = a.truncatingRemainder(dividingBy: 1);
    let fractionalPartB = b.truncatingRemainder(dividingBy: 1);
    return fractionalPartA <= fractionalPartB;
})

print(sortedNumbers)
