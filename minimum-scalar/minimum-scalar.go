
package main

import "fmt"
import "log"
import "bufio"
import "strings"
import "strconv"
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


  for i := 1; i < len(lines); i+=3 {
    first_array_s := strings.Split(lines[i + 1], " ")
    second_aray_s := strings.Split(lines[i + 2], " ")
    var first_array_i, second_array_i []int

    for i := 0; i < len(first_array_s); i++ {
      k, _ := strconv.Atoi(first_array_s[i])
      first_array_i = append(first_array_i, k)

      k, _ = strconv.Atoi(second_aray_s[i])
      second_array_i = append(second_array_i, k)
    }
    res :=

    for (var j = 0; j < first_aray.length; j++) {
      res += first_aray[j] * second_aray[j];
    }

    for i := 0; i < len(first_array_i); i++ {

    }
    fmt.Println(first_array_i)
    fmt.Println(second_array_i)

  }

  //fmt.Println(first_aray)
}
