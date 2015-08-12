
package main

import "fmt"
import "log"
import "bufio"
import "os"

func main() {
    file, err := os.Open(os.Args[1])
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

  scanner := bufio.NewScanner(file)
  var lines []string
    for scanner.Scan() {
        //'scanner.Text()' represents the test case, do something with it
        //fmt.Println(scanner.Text())
      //  lines.append(lines, scanner.Text())
        lines = append(lines, scanner.Text())
    }

fmt.Println(lines[0])

}
