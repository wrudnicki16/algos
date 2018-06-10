class Node
  attr_accessor :val, :next
  def initialize(val, next_node = nil)
    @val = val
    @next = next_node
  end
  
end

class LinkedList
  attr_reader :head, :tail
  def initialize(val)
    @head = Node.new(val)
  end

  def insert(val)
    new_node = Node.new(val, @head.next)
    @head.next = new_node
  end

  def delete(val)
    prev_node = self.head
    cur_node = prev_node.next
    while !cur_node.nil?
      # remove
      if cur_node.val == val
        prev_node.next = cur_node.next
      end
      prev_node = cur_node
      cur_node = cur_node.next
    end

    def return_list
      result = []
      cur_node = @head.next
      while !cur_node.nil?
        result.push(cur_node.val)
        cur_node = cur_node.next
      end
      result
    end
  end
  
end